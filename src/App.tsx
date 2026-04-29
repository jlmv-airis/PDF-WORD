import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion';
import { FileUp, Image as ImageIcon, Settings, Play, CheckCircle2, AlertCircle, FileText, Download, X, Loader2 } from 'lucide-react';

export default function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [mode, setMode] = useState<'pdf' | 'img'>('pdf');
  const [quality, setQuality] = useState('HD');
  const [autoCrop, setAutoCrop] = useState(true);
  const [genWord, setGenWord] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [taskId, setTaskId] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files).filter(f => 
      mode === 'pdf' ? f.type === 'application/pdf' : f.type.startsWith('image/')
    );
    setFiles(prev => [...prev, ...newFiles]);
  }, [mode]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const startConversion = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    setStatus('Subiendo archivos...');
    
    try {
      const formData = new FormData();
      files.forEach(f => formData.append('files', f));
      
      const uploadRes = await fetch('/upload', { method: 'POST', body: formData });
      const { task_id, mode: resMode } = await uploadRes.json();
      setTaskId(task_id);
      
      setStatus('Procesando...');
      
      const procRes = await fetch('/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task_id,
          mode,
          quality,
          auto_crop: autoCrop,
          gen_word: genWord
        })
      });
      
      const data = await procRes.json();
      
      if (data.ready) {
        setProgress(100);
        setStatus('¡Completado!');
        setDownloadUrl(`/download/${task_id}/Imagenes.docx`);
      }
    } catch (e: any) {
      setStatus('Error: ' + e.message);
    }
    
    setIsProcessing(false);
  };

  const reset = () => {
    setFiles([]);
    setProgress(0);
    setStatus('');
    setDownloadUrl('');
    setTaskId('');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1a1a1a] font-sans selection:bg-blue-500/20">
      <div className="max-w-3xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight text-[#0A2640] mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            AIRIS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-[#627E84] text-base font-medium"
          >
            Conversión inteligente de documentos
          </motion.p>
        </header>

        <main className="space-y-8">
          
          {/* Mode Selector */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-1 bg-white rounded-full p-1 border border-[#EAEAEA] w-fit mx-auto"
          >
            <button
              onClick={() => { setMode('pdf'); reset(); }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                mode === 'pdf' 
                  ? 'bg-[#0A2640] text-white shadow-sm' 
                  : 'text-[#627E84] hover:text-[#0A2640]'
              }`}
            >
              <FileText size={16} className="inline mr-2" />
              PDF a Imagen
            </button>
            <button
              onClick={() => { setMode('img'); reset(); }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                mode === 'img' 
                  ? 'bg-[#0A2640] text-white shadow-sm' 
                  : 'text-[#627E84] hover:text-[#0A2640]'
              }`}
            >
              <ImageIcon size={16} className="inline mr-2" />
              Solo Word
            </button>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="bg-white border-2 border-dashed border-[#EAEAEA] rounded-2xl p-12 text-center hover:border-[#0A2640]/30 transition-all cursor-pointer"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <input 
              id="fileInput" 
              type="file" 
              multiple 
              accept={mode === 'pdf' ? '.pdf' : '.jpg,.jpeg,.png'} 
              className="hidden"
              onChange={handleFileSelect}
            />
            
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0A2640]/5 flex items-center justify-center">
              <FileUp size={28} className="text-[#0A2640]" />
            </div>
            
            {files.length === 0 ? (
              <>
                <h3 className="text-lg font-semibold text-[#0A2640] mb-2">
                  Arrastra archivos aquí
                </h3>
                <p className="text-sm text-[#627E84]">
                  o haz clic para seleccionar • {mode === 'pdf' ? 'PDF' : 'JPG, PNG'}
                </p>
              </>
            ) : (
              <div className="text-left space-y-2">
                <p className="text-sm font-semibold text-[#0A2640] mb-3">
                  {files.length} archivo(s) cargado(s)
                </p>
                {files.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#F8F8F8] rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#65E4A3]/10 flex items-center justify-center">
                        <FileText size={18} className="text-[#0A2640]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-[#627E84]">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                      className="p-1 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X size={16} className="text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Settings - Only for PDF mode */}
          <AnimatePresence>
            {mode === 'pdf' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-2xl border border-[#EAEAEA] p-6 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Settings size={18} className="text-[#0A2640]" />
                  <h3 className="font-semibold text-[#0A2640]">Configuración</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs font-semibold text-[#627E84] uppercase tracking-wider mb-3 block">
                      Calidad
                    </label>
                    <select 
                      value={quality} 
                      onChange={(e) => setQuality(e.target.value)}
                      className="w-full p-3 bg-[#F8F8F8] border border-[#EAEAEA] rounded-xl text-sm text-[#0A2640] font-medium focus:outline-none focus:border-[#0A2640]/30"
                    >
                      <option value="Estándar">Estándar (150 DPI)</option>
                      <option value="HD">HD (300 DPI)</option>
                      <option value="Ultra">Ultra (600 DPI)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0A2640]">Auto-recorte</span>
                    <button
                      onClick={() => setAutoCrop(!autoCrop)}
                      className={`relative w-12 h-7 rounded-full transition-colors ${
                        autoCrop ? 'bg-[#65E4A3]' : 'bg-[#EAEAEA]'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                        autoCrop ? 'translate-x-5' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#0A2640]">Generar Word</span>
                    <button
                      onClick={() => setGenWord(!genWord)}
                      className={`relative w-12 h-7 rounded-full transition-colors ${
                        genWord ? 'bg-[#65E4A3]' : 'bg-[#EAEAEA]'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                        genWord ? 'translate-x-5' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress */}
          <AnimatePresence>
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl border border-[#EAEAEA] p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Loader2 size={18} className="text-[#0A2640] animate-spin" />
                  <span className="text-sm font-medium text-[#0A2640]">{status}</span>
                </div>
                <div className="h-2 bg-[#F8F8F8] rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-[#65E4A3] rounded-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Download Result */}
          <AnimatePresence>
            {downloadUrl && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#65E4A3]/10 border border-[#65E4A3]/30 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 size={20} className="text-[#0A2640]" />
                  <span className="font-semibold text-[#0A2640]">Proceso completado</span>
                </div>
                <a 
                  href={downloadUrl}
                  className="inline-flex items-center gap-2 bg-[#0A2640] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0d3a6b] transition-colors"
                >
                  <Download size={16} />
                  Descargar Word
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center pt-4"
          >
            {!downloadUrl ? (
              <button
                onClick={startConversion}
                disabled={isProcessing || files.length === 0}
                className={`
                  px-10 py-4 rounded-xl font-bold text-sm tracking-wide transition-all
                  ${isProcessing || files.length === 0 
                    ? 'bg-[#EAEAEA] text-[#627E84] cursor-not-allowed' 
                    : 'bg-[#0A2640] text-white hover:bg-[#0d3a6b] shadow-lg shadow-[#0A2640]/20'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {isProcessing ? (
                    <>PROCESANDO... <Loader2 size={16} className="animate-spin" /></>
                  ) : (
                    <>INICIAR CONVERSIÓN <Play size={16} fill="currentColor" /></>
                  )}
                </span>
              </button>
            ) : (
              <button
                onClick={reset}
                className="px-10 py-4 rounded-xl font-bold text-sm tracking-wide bg-white border border-[#EAEAEA] text-[#0A2640] hover:bg-[#F8F8F8] transition-colors"
              >
                NUEVO PROCESO
              </button>
            )}
          </motion.div>

        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#EAEAEA] text-center">
          <p className="text-xs text-[#627E84] font-medium">
            Desarrollado por Jorge Meneses • AIRIS SUITE v1.1
          </p>
        </footer>

      </div>
    </div>
  );
}

import React, { useRef } from 'react';
import { Upload, FileText, X, AlertCircle } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { formatFileSize, getFileIcon } from '../../utils/fileValidation';
import { ACCEPTED_FILE_TYPES } from '../../utils/constants';

export default function FileUploadBox({
  file,
  error,
  isDragging,
  onFile,
  onRemove,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}) {
  const inputRef = useRef(null);

  const acceptString = Object.values(ACCEPTED_FILE_TYPES).join(',');

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-surface-600 dark:text-surface-400">
        Upload study material <span className="text-surface-400 dark:text-surface-500 font-normal">(optional)</span>
      </label>

      {!file ? (
        <div
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={cn(
            'relative flex flex-col items-center justify-center gap-3 p-8 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200',
            isDragging
              ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-500/5'
              : 'border-surface-200 dark:border-surface-700 hover:border-surface-300 dark:hover:border-surface-600 hover:bg-surface-50 dark:hover:bg-surface-800/50'
          )}
        >
          <div className="w-10 h-10 rounded-xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
            <Upload size={20} className="text-surface-400" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-surface-600 dark:text-surface-300">
              Drop file here or <span className="text-brand-500">browse</span>
            </p>
            <p className="text-xs text-surface-400 dark:text-surface-500 mt-1">
              PDF, TXT, DOCX, PNG, JPG — up to 10MB
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={acceptString}
            onChange={(e) => onFile(e.target.files?.[0])}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
            <FileText size={18} className="text-brand-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-surface-800 dark:text-surface-200 truncate">
              {file.name}
            </p>
            <p className="text-xs text-surface-400">{formatFileSize(file.size)}</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="p-1.5 rounded-lg text-surface-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 text-xs text-red-500">
          <AlertCircle size={14} />
          {error}
        </div>
      )}
    </div>
  );
}
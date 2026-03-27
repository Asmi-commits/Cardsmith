import React from 'react';

export default function UploadPreview({ preview, fileName }) {
  if (!preview) return null;

  return (
    <div className="rounded-2xl overflow-hidden border border-surface-200 dark:border-surface-700">
      <img
        src={preview}
        alt={fileName}
        className="w-full max-h-48 object-cover"
      />
      <div className="px-4 py-2 bg-surface-50 dark:bg-surface-800">
        <p className="text-xs text-surface-500 truncate">{fileName}</p>
      </div>
    </div>
  );
}
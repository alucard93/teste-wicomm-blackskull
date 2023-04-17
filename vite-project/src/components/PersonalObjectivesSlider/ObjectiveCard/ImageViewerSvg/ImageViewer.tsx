interface ImageViewerProps {
  className?: string;
}

export function ImageViewer(props: ImageViewerProps) {
  const { className, ...svgProps } = props;

  return (
    <div>
      <svg
        width="68"
        height="40"
        viewBox="0 0 68 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
        className={`image-viewer ${className ?? ""}`}
      >
        <path d="M40 0H52.5L32.5 40H20L40 0Z" fill="#FF9601" />
        <path d="M20 0H32.5L12.5 40H0L20 0Z" fill="#FF9601" />
        <path d="M59 0H68L48 40H39L59 0Z" fill="#FF9601" />
      </svg>
    </div>
  );
};

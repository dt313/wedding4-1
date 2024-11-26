function House({ className, width = 28, height = 28 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.479 21.96h-2.147V9.033h2.147a.515.515 0 0 0 .148-1.009c-5.606-1.676-10.2-6.8-10.241-6.848a.531.531 0 0 0-.772 0c-.045.051-4.635 5.172-10.241 6.848a.515.515 0 0 0 .148 1.009h2.147V21.96H1.521a.515.515 0 1 0 0 1.03h20.958a.515.515 0 0 0 0-1.03zm-16.52 0H4.7V9.033h1.26zm11.052 0H6.989V9.033h10.022zm2.29 0h-1.26V9.033H19.3zM4.255 8A28.611 28.611 0 0 0 12 2.273 28.611 28.611 0 0 0 19.745 8z" />
      <path d="M11.656 18.417a.514.514 0 0 0 .688 0 36.647 36.647 0 0 0 2.686-2.606 1.994 1.994 0 0 0 .345-1.7 2.249 2.249 0 0 0-1.265-1.5 2 2 0 0 0-2.11.364 2 2 0 0 0-2.11-.364 2.249 2.249 0 0 0-1.265 1.5 1.994 1.994 0 0 0 .345 1.7 36.647 36.647 0 0 0 2.686 2.606zm-2.029-4.063a1.217 1.217 0 0 1 .693-.81.718.718 0 0 1 .3-.067 1.543 1.543 0 0 1 .978.538.513.513 0 0 0 .4.186.518.518 0 0 0 .4-.185c.006-.007.65-.763 1.283-.472a1.217 1.217 0 0 1 .693.81.967.967 0 0 1-.159.828A30.4 30.4 0 0 1 12 17.339a30.4 30.4 0 0 1-2.214-2.157.967.967 0 0 1-.159-.828z" />
    </svg>
  );
}

export default House;

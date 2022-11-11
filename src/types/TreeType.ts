interface TreeInterface {
  $currentPath: string;
  $files: Array<string | number>;
  $dirs: Array<string | number>;
  $trees: Array<string | number>;
}

interface FileInterface {
  name: string;
  size: string | number;
  lastModified: string;
}

export { TreeInterface, FileInterface };

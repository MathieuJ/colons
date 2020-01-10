
export function random(min: number, max: number) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  export function randomElement(array: any[]) {
    return array[random(0, array.length - 1)];
  }

  export function  melange(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      const x = array[j];
      array[j] = array[i];
      array[i] = x;
    }
  }

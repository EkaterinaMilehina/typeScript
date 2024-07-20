// Доработайте интерфейс таким образом
// Чтобы бренд и модель авто могли быть указаны лишь
// один раз. А и ovnerName было опциональным

interface ICar {
    readonly brand: string;
    readonly model: string;
    hp: number;
    registrationNumber: string;
    ownerName?: string;
  }
  
const av:ICar  = {
  brand: 'bookl',
  model: 'vg',
  hp: 325
}

av.hp = 233;
av.model = 'fvfv';
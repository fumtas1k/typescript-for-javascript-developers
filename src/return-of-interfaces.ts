export {};

class Mahoutsukai {}
class Souryo {}

// class Taro extends Mahoutsukai, Souryo {}

// 1つのクラスしか継承(extends)できないが、インターフェイスは複数引き継ぐ(inplements)ことができる
interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kogeki(): void;
}

class Jiro implements Kenja, Senshi{
  ionazun(): void {};
  kogeki(): void {};
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kogeki();

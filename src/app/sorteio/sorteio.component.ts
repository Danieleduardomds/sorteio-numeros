import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.scss'],
})
export class SorteioComponent {
  numeroSorteado: number | null = null;
  loading: boolean = false;
  showPulsarEffect = false;

  realizarSorteio(): void {
    this.loading = true; // Inicia a animação de carregamento
    this.showPulsarEffect = false; // Garantir que a animação não seja repetida imediatamente

    // Simula o atraso do sorteio
    setTimeout(() => {
      this.numeroSorteado = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório
      this.loading = false; // Remove a animação de carregamento
      this.showPulsarEffect = true; // Adiciona o efeito pulsar após o sorteio
    }, 5000); // 5 segundos
  }
}

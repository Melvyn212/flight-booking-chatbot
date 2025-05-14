import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

interface Message {
  text: string;
  type: 'user-message' | 'bot-message';
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatbox') private chatbox!: ElementRef;
  
  messages: Message[] = [];
  userInput: string = '';
  isTyping: boolean = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.addBotMessage('Bonjour ! Je suis votre assistant de réservation de vols. Comment puis-je vous aider aujourd\'hui ?');
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatbox.nativeElement.scrollTop = this.chatbox.nativeElement.scrollHeight;
    } catch (err) {}
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.addUserMessage(this.userInput);
    this.isTyping = true;

    this.chatService.sendMessage(this.userInput).subscribe({
      next: (response) => {
        this.addBotMessage(response.response);
        this.isTyping = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.addBotMessage('Désolé, une erreur est survenue. Veuillez réessayer.');
        this.isTyping = false;
      }
    });

    this.userInput = '';
  }

  private addUserMessage(text: string) {
    this.messages.push({ text, type: 'user-message' });
  }

  private addBotMessage(text: string) {
    this.messages.push({ text, type: 'bot-message' });
  }
}

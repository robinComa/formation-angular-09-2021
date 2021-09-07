import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appMailto]'
})
export class MailtoDirective implements AfterViewInit {

  constructor(private elRef: ElementRef<HTMLAnchorElement>) { }

  ngAfterViewInit(): void {
    const email = this.elRef.nativeElement.innerText;
    this.addMailto(email);
  }

  private addMailto(email: string): void {
    this.elRef.nativeElement.setAttribute('href', `mailto:${email}`);
  }

}

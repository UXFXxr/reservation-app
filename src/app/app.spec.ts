// Angular のテスト用ユーティリティをインポート
import { TestBed } from '@angular/core/testing';
// テスト対象の AppComponent をインポート
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // 各テストの前に実行されるセットアップ
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone コンポーネントの場合は imports に追加
      imports: [AppComponent],
    }).compileComponents(); // コンポーネントとテンプレートをコンパイル
  });

  // ===============================
  // 1. コンポーネントが正しく生成されるか確認
  // ===============================
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // コンポーネントのインスタンスを作成
    const app = fixture.componentInstance; // コンポーネントのクラスインスタンスを取得
    expect(app).toBeTruthy(); // インスタンスが存在することを確認
  });

  // ===============================
  // 2. テンプレート内のタイトルが正しくレンダリングされるか確認
  // ===============================
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // コンポーネント作成
    fixture.detectChanges(); // 変更検知を実行（テンプレートに反映）
    const compiled = fixture.nativeElement as HTMLElement; // ネイティブ DOM を取得
    expect(compiled.querySelector('h1')?.textContent) // h1 タグのテキストが
      .toContain('Hello, reservation-app'); // 指定文字列を含むことを確認
  });
});

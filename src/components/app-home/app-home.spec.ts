import { TestWindow } from '@stencil/core/testing';
import { MyWebHome } from './app-home';

describe('app', () => {
  it('should build', () => {
    expect(new MyWebHome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMyWebHomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MyWebHome],
        html: '<app-home></app-home>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});

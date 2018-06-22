/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';

import {
  MatchResults,
} from '@stencil/router';
import {
  Books,
} from './global/Books';
import {
  CardEvent,
} from './global/CardEvent';

declare global {

  namespace StencilComponents {
    interface MyWebAbout {

    }
  }

  interface HTMLMyWebAboutElement extends StencilComponents.MyWebAbout, HTMLStencilElement {}

  var HTMLMyWebAboutElement: {
    prototype: HTMLMyWebAboutElement;
    new (): HTMLMyWebAboutElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-about': HTMLMyWebAboutElement;
  }
  interface ElementTagNameMap {
    'my-web-about': HTMLMyWebAboutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-about': JSXElements.MyWebAboutAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebAboutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebContact {

    }
  }

  interface HTMLMyWebContactElement extends StencilComponents.MyWebContact, HTMLStencilElement {}

  var HTMLMyWebContactElement: {
    prototype: HTMLMyWebContactElement;
    new (): HTMLMyWebContactElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-contact': HTMLMyWebContactElement;
  }
  interface ElementTagNameMap {
    'my-web-contact': HTMLMyWebContactElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-contact': JSXElements.MyWebContactAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebContactAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebMore {

    }
  }

  interface HTMLMyWebMoreElement extends StencilComponents.MyWebMore, HTMLStencilElement {}

  var HTMLMyWebMoreElement: {
    prototype: HTMLMyWebMoreElement;
    new (): HTMLMyWebMoreElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-more': HTMLMyWebMoreElement;
  }
  interface ElementTagNameMap {
    'my-web-more': HTMLMyWebMoreElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-more': JSXElements.MyWebMoreAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebMoreAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebPortfolio {

    }
  }

  interface HTMLMyWebPortfolioElement extends StencilComponents.MyWebPortfolio, HTMLStencilElement {}

  var HTMLMyWebPortfolioElement: {
    prototype: HTMLMyWebPortfolioElement;
    new (): HTMLMyWebPortfolioElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-portfolio': HTMLMyWebPortfolioElement;
  }
  interface ElementTagNameMap {
    'my-web-portfolio': HTMLMyWebPortfolioElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-portfolio': JSXElements.MyWebPortfolioAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebPortfolioAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'match': MatchResults;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebSocial {

    }
  }

  interface HTMLMyWebSocialElement extends StencilComponents.MyWebSocial, HTMLStencilElement {}

  var HTMLMyWebSocialElement: {
    prototype: HTMLMyWebSocialElement;
    new (): HTMLMyWebSocialElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-social': HTMLMyWebSocialElement;
  }
  interface ElementTagNameMap {
    'my-web-social': HTMLMyWebSocialElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-social': JSXElements.MyWebSocialAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebSocialAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebBlog {

    }
  }

  interface HTMLMyWebBlogElement extends StencilComponents.MyWebBlog, HTMLStencilElement {}

  var HTMLMyWebBlogElement: {
    prototype: HTMLMyWebBlogElement;
    new (): HTMLMyWebBlogElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-blog': HTMLMyWebBlogElement;
  }
  interface ElementTagNameMap {
    'my-web-blog': HTMLMyWebBlogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-blog': JSXElements.MyWebBlogAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebBlogAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebBookLibrary {
      'books': Books[];
      'currentBook': Books;
    }
  }

  interface HTMLMyWebBookLibraryElement extends StencilComponents.MyWebBookLibrary, HTMLStencilElement {}

  var HTMLMyWebBookLibraryElement: {
    prototype: HTMLMyWebBookLibraryElement;
    new (): HTMLMyWebBookLibraryElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-book-library': HTMLMyWebBookLibraryElement;
  }
  interface ElementTagNameMap {
    'my-web-book-library': HTMLMyWebBookLibraryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-book-library': JSXElements.MyWebBookLibraryAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebBookLibraryAttributes extends HTMLAttributes {
      'books'?: Books[];
      'currentBook'?: Books;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebHeader {

    }
  }

  interface HTMLMyWebHeaderElement extends StencilComponents.MyWebHeader, HTMLStencilElement {}

  var HTMLMyWebHeaderElement: {
    prototype: HTMLMyWebHeaderElement;
    new (): HTMLMyWebHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-header': HTMLMyWebHeaderElement;
  }
  interface ElementTagNameMap {
    'my-web-header': HTMLMyWebHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-header': JSXElements.MyWebHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyWebNav {

    }
  }

  interface HTMLMyWebNavElement extends StencilComponents.MyWebNav, HTMLStencilElement {}

  var HTMLMyWebNavElement: {
    prototype: HTMLMyWebNavElement;
    new (): HTMLMyWebNavElement;
  };
  interface HTMLElementTagNameMap {
    'my-web-nav': HTMLMyWebNavElement;
  }
  interface ElementTagNameMap {
    'my-web-nav': HTMLMyWebNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-web-nav': JSXElements.MyWebNavAttributes;
    }
  }
  namespace JSXElements {
    export interface MyWebNavAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRecentEventCard {
      'cardEvent': CardEvent;
    }
  }

  interface HTMLAppRecentEventCardElement extends StencilComponents.AppRecentEventCard, HTMLStencilElement {}

  var HTMLAppRecentEventCardElement: {
    prototype: HTMLAppRecentEventCardElement;
    new (): HTMLAppRecentEventCardElement;
  };
  interface HTMLElementTagNameMap {
    'app-recent-event-card': HTMLAppRecentEventCardElement;
  }
  interface ElementTagNameMap {
    'app-recent-event-card': HTMLAppRecentEventCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-recent-event-card': JSXElements.AppRecentEventCardAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRecentEventCardAttributes extends HTMLAttributes {
      'cardEvent'?: CardEvent;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

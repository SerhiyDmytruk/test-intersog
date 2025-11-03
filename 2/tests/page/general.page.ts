import type {Page} from '@playwright/test'

export class General {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async openSite(url=""): Promise<void> {
        if (!url) throw new Error('URL is required for openSite()');
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }
}

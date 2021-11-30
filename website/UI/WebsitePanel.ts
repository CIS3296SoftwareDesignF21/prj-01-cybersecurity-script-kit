import VStack from '@Hi/Components/VStack';
import View from '@Hi/View';

export default class WebsitePanel extends VStack {
    constructor(...children: View[]) {
        super(...children);
        this.margin({ bottom: 50, top: 50 }).width('100%');
    }
}

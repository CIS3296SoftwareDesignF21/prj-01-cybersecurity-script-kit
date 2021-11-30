import IonIcon from '@Hi/Components/IonIcon';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';

export default class Heading extends VStack {
    constructor(text: string, icon?: IonIcon) {
        super();
        if (icon) this.addChildren(icon.font(50).margin({ bottom: 25 }));
        this.addChildren(new TextView(text).font(50).margin({ bottom: 10 }));
    }
}

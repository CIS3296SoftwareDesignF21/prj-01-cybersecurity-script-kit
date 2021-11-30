import { HColor } from '@Hi/Colors';
import HStack from '@Hi/Components/HStack';
import ImageView from '@Hi/Components/ImageView';
import IonIcon from '@Hi/Components/IonIcon';
import ScrollView from '@Hi/Components/ScrollView';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';

export default class ScreenshotsPage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Screenshots'),

            new ScrollView(
                new VStack(
                    new WebsitePanel(
                        new IonIcon('images').font(50).margin({ bottom: 25 }),

                        new TextView('Screenshots').font(50),

                        new ImageView('/img/csk-init.png'),

                        new TextView('CSK Greeting in macOS Terminal')
                    )
                ).stretch()
            ).stretch()
        );

        this.stretch();
    }
}

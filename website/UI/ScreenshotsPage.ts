import ImageView from '@Hi/Components/ImageView';
import IonIcon from '@Hi/Components/IonIcon';
import ScrollView from '@Hi/Components/ScrollView';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import Heading from './Heading';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';

export default class ScreenshotsPage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Screenshots'),

            new ScrollView(
                new VStack(
                    new WebsitePanel(
                        new Heading('Screenshots', new IonIcon('images')),

                        new ImageView('/img/csk-init.png'),

                        new TextView('CSK Greeting in macOS Terminal')
                    )
                ).stretch()
            ).stretch()
        );

        this.stretch();
    }
}

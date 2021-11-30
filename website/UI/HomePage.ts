import { HColor, rgb } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import ImageView from '@Hi/Components/ImageView';
import IonIcon from '@Hi/Components/IonIcon';
import ScrollView from '@Hi/Components/ScrollView';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import Heading from './Heading';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';

export default class HomePage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Home'),

            new ScrollView(
                new VStack(
                    new ImageView('/img/splash.png', 'Splash Image')
                        .width('100%')
                        .background(HColor('gray')),

                    new WebsitePanel(
                        new Heading('What is CSK?', new IonIcon('help')),

                        new TextView(
                            'CSK is a set of tools and libraries for cyber security. You get out-of-the-box features, such as sniffing HTTP requests, accessing HTTP headers, a keylogger, and more! CSK comes packaged as a shell which can be run in the Mac/Linux terminal environments (bash/zsh) along with Windows PowerShell.'
                        )
                            .width({
                                min: 500,
                                max: 800,
                                default: '75%',
                            })
                            .font('lg')
                            .padding()
                            .lineHeight('150%')
                    ),

                    new WebsitePanel(
                        new Heading('Download & Installation', new IonIcon('download')),

                        new TextView(
                            "We tried making this process as simple as possible. You can access each of our releases via GitHub. Prior to installation, please make sure you have Python 3.7+ installed, along with pip (Python's package manager), and pyinstaller."
                        )
                            .width({
                                min: 500,
                                max: 800,
                                default: '75%',
                            })
                            .font('lg')
                            .padding()
                            .lineHeight('150%'),

                        new ClickButton(
                            new HStack(
                                new IonIcon('cloud-download-outline'),
                                new TextView('Download').margin({ left: 15 })
                            )
                        )
                            .font('lg')
                            .background(HColor('blue'))
                            .foreground(rgb(255, 255, 255))
                            .padding()
                            .rounded()
                            .whenClicked(() => {
                                window.open(
                                    'https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/releases',
                                    '_blank'
                                );
                            })
                    )
                ).stretch()
            ).stretch()
        );
    }
}

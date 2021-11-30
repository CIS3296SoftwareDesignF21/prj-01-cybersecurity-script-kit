import ClickButton from '@Hi/Components/ClickButton';
import HIFullScreenView from '@Hi/Components/HIFullScreenView';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import IonIcon from '@Hi/Components/IonIcon';
import { ViewController } from '@Hi/ViewController';
import { HColor, rgb } from '@Hi/Colors';
import ScrollView from '@Hi/Components/ScrollView';
import Resources from '@Hi/Resources';
import ImageView from '@Hi/Components/ImageView';
import View from '@Hi/View';

class WebsitePanel extends VStack {
    constructor(...children: View[]) {
        super(...children);
        this.margin({ bottom: 50, top: 50 });
    }
}

class NavigationPanel extends HStack {
    constructor(activeNav: string) {
        activeNav = activeNav.toLowerCase();
        const homeText = new TextView('Home');
        const killchainText = new TextView('Cyber Killchain');

        switch (activeNav) {
            case 'home':
                homeText.bold();
                break;
            case 'killchain':
                killchainText.bold();
                break;
        }

        super(
            new ClickButton(homeText)
                .padding(5)
                .padding({ left: 10, right: 10 })
                .font('md')
                .whenClicked(() =>
                    ViewController.getController('ContentController')!.navigateTo(new HomePage())
                ),

            new ClickButton(killchainText)
                .padding(5)
                .padding({ left: 10, right: 10 })
                .font('md')
                .whenClicked(() =>
                    ViewController.getController('ContentController')!.navigateTo(
                        new KillchainPage()
                    )
                ),

            new Spacer()
        );

        this.borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' }).width('100%');
    }
}

class KillchainPage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Killchain'),

            new ScrollView(
                new VStack(
                    new WebsitePanel(
                        new IonIcon('shield')
                            .font(50)
                            .margin({ bottom: 25 })
                            .foreground(HColor('green')),

                        new TextView('The Cyber Killchain').font(50),

                        new TextView(
                            'The Cyber Killchain is a series of events that occur in the course of a cyber attack. The events are categorized into three categories: Information, Intrusion, and Exploitation.'
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
                        new ImageView(
                            'https://blogvaronis2.wpengine.com/wp-content/uploads/2016/06/cyber-kill-chain-phases-2@2x.png'
                        ).width('100%'),
                        new ImageView(
                            'https://blogvaronis2.wpengine.com/wp-content/uploads/2016/06/KC-bgadd.png'
                        ).width('100%'),
                        new HStack(
                            new Spacer(),
                            new TextView('Images sourced from: ').font('md'),
                            new ClickButton(
                                new TextView('https://www.varonis.com/blog/cyber-kill-chain/')
                            )
                                .padding(5)
                                .whenClicked(() => {
                                    window.open(
                                        'https://www.varonis.com/blog/cyber-kill-chain/',
                                        '_blank'
                                    );
                                })
                                .font('md')
                        )
                            .width('100%')
                            .padding()
                    )
                )
            ).stretch()
        );
    }
}

class HomePage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Home'),

            new ScrollView(
                new VStack(
                    new ImageView('/img/splash.png', 'Splash Image')
                        .width('100%')
                        .background(HColor('gray')),

                    new WebsitePanel(
                        new IonIcon('help').font(50).margin({ bottom: 25 }),

                        new TextView('What is CSK?').font(50),

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
                        new IonIcon('download-outline').font(50).margin({ bottom: 25 }),

                        new TextView('Download and Installation').font(50),

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
                                new TextView('Download').margin({ left: 10 })
                            )
                        )
                            .font('lg')
                            .background(HColor('gray'))
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

class SiteWrapper extends HIFullScreenView {
    private contentController = new ViewController('ContentController');

    constructor() {
        super(
            new VStack(
                new HStack(
                    new TextView('CSK').font('xxl'),
                    new TextView('CyberSecurity Script Kit')
                        .font('xl')
                        .foreground(HColor('gray'))
                        .margin({ left: 25 }),
                    new Spacer(),
                    new ClickButton(
                        new HStack(
                            new IonIcon('logo-github').font('lg'),
                            new TextView('GitHub').padding({ left: 10 })
                        )
                    )
                        .font('md')
                        .background(HColor('blue'))
                        .foreground(HColor('background'))
                        .padding()
                        .rounded()
                )
                    .width('100%')
                    .padding()
                    .borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' })
                    .fixed()
                    .setTop(0)
                    .setLeft(0)
                    .background(HColor('background').alpha(0.75))
                    .blur(),

                new VStack().id('main-content').padding({ top: 63 })
            )
        );

        ViewController.getController('ContentController')
            ?.bind(this.findViewById('main-content')!.body)
            .navigateTo(new HomePage());
    }

    public navigateToHome(): void {
        this.contentController.navigateTo(new HomePage());
    }

    public navigateToCyberKillchain(): void {
        this.contentController.navigateTo(new KillchainPage());
    }
}

const controller = new ViewController('AppController');

controller.bind().navigateTo(new SiteWrapper());

import React from 'react';
import { TypographySettings } from '../types';

interface Props {
  settings: TypographySettings;
}

export function Preview({ settings }: Props) {
  const bodyStyle = {
    fontFamily: settings.fontFamily,
    fontSize: `${settings.fontSize}em`,
    fontWeight: settings.fontWeight,
    lineHeight: settings.lineHeight,
    letterSpacing: `${settings.letterSpacing}em`,
    wordSpacing: `${settings.wordSpacing}em`,
    textAlign: settings.textAlign,
    textDecoration: settings.textDecoration,
    fontStyle: settings.fontStyle,
    textTransform: settings.textTransform as any,
    marginBottom: `${settings.marginBottom}em`

  };

  const headingStyle = {
    fontFamily: settings.headings.fontFamily,
    fontSize: `${settings.headings.fontSize}em`,
    fontWeight: settings.headings.fontWeight,
    lineHeight: settings.headings.lineHeight,
    letterSpacing: `${settings.headings.letterSpacing}em`,
    marginBottom: `${settings.headings.marginBottom}em`
  };

  const h2Style = {
    ...headingStyle,
    fontSize: `${settings.headings.fontSize * 0.75}em`
  };

  const h3Style = {
    ...headingStyle,
    fontSize: `${settings.headings.fontSize * 0.6}em`
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div style={bodyStyle} className="transition-all duration-200">
        <h1 style={headingStyle}>Typography in Design</h1>

        <h2 style={h2Style}>The Art of Visual Communication</h2>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
          The arrangement of type involves selecting typefaces, point sizes, line lengths, line-spacing, and letter-spacing.
        </p>

        <h3>Elit magna praesent inceptos tincidunt sit</h3>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facil
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Porttitor laoreet, per blandit porta feugiat. Donec posuere tristique sodales commodo viverra rutrum placerat sociis rutrum velit per taciti. Porta nisi euismod vulputate tincidunt erat vehicula nisl? Sodales commodo condimentum, amet quisque rhoncus? Felis vel facilisi at dignissim enim fames turpis facilisi. Laoreet augue tellus sem habitasse sem congue tempus. Erat malesuada ac.
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Semper enim iaculis interdum placerat eget. Lorem vestibulum et per venenatis fermentum mi ipsum imperdiet tempor mattis dui himenaeos. Facilisi nunc mi penatibus. Etiam dolor justo donec nostra pellentesque eget sagittis dictumst cum iaculis. Taciti massa torquent commodo congue class gravida ac sociosqu egestas at vestibulum torquent! Sodales bibendum facilisis varius mattis justo purus orci a rutrum condimentum at. Eleifend tellus vulputate vehicula sed.
        </p>

        <h4>at nascetur mi gravida dapibus ut </h4>
        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Praesent ultricies fusce convallis sed augue venenatis. Placerat velit pulvinar tincidunt aliquet ridiculus semper vehicula facilisis, lacinia sociis conubia? Risus gravida risus auctor vivamus euismod nisl malesuada class dis sociis vel mauris. Commodo tristique fermentum erat dapibus ut nisi viverra dignissim, feugiat habitant. Mattis curabitur tempor facilisis gravida enim sollicitudin commodo luctus. Feugiat egestas id lacus primis ligula etiam. Porttitor fusce parturient aliquet at lobortis dis. Cras lectus leo aliquam vulputate praesent imperdiet.
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Nullam justo taciti lobortis tincidunt elit. Metus pharetra netus mus interdum proin aptent. Ad magna amet odio ac tristique neque blandit quam fames. Ligula, luctus sodales vulputate eget sociosqu ac et pulvinar. Mattis natoque eget tristique amet arcu leo faucibus diam. Tristique eget ante dis? Mus egestas urna pellentesque nascetur. Semper eu dictum vitae. Molestie porta cubilia turpis tempus diam, fermentum tellus tincidunt ipsum. Eget, eu sociis ligula velit dictum facilisi condimentum cursus eget. Rutrum; tellus turpis nostra ullamcorper! Pharetra adipiscing facilisis dictum ornare nibh quam! Nascetur dapibus consectetur rhoncus habitant fusce lorem fames, convallis adipiscing! Risus penatibus in purus feugiat, facilisi.
        </p>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Dis ullamcorper elit per velit lobortis arcu nascetur parturient a nisl ullamcorper accumsan. Scelerisque dapibus risus consectetur porttitor morbi quisque facilisi potenti tempor condimentum. Class posuere platea lorem dapibus primis tempus. Cum vehicula montes tempor sed purus quam ligula quis conubia? Blandit lorem tincidunt erat suspendisse. Rhoncus turpis dignissim sapien hac rhoncus rhoncus ullamcorper scelerisque vitae. Tincidunt vivamus.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 italic my-6">
          "Typography is the craft of endowing human language with a durable visual form."
          — Robert Bringhurst
        </blockquote>

        <h3 style={h3Style}>Key Elements of Typography</h3>

        <ul className="list-disc pl-6 space-y-2 my-6">
          <li>Typeface selection and pairing</li>
          <li>Hierarchy and visual rhythm</li>
          <li>Spacing and alignment</li>
          <li>Color and contrast</li>
        </ul>

        <div className="grid grid-cols-2 gap-4 my-6">
          <img
            src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80"
            alt="Letterpress blocks"
            className="rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1524072704778-628f7f957c45?auto=format&fit=crop&w=600&q=80"
            alt="Typography specimens"
            className="rounded-lg"
          />
        </div>

        <h3 style={h3Style}>The Digital Age</h3>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          In the digital era, typography has evolved beyond traditional print media. Web fonts, responsive design, and variable fonts
          have opened new possibilities for typographic expression across devices and platforms.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h4 style={h3Style} className="mb-2">Did you know?</h4>
          <p style={{ marginBottom: bodyStyle.marginBottom }}>
            The term "font" originally referred to a complete set of metal type that shared a typeface, style, and size.
          </p>
        </div>

        <p style={{ marginBottom: bodyStyle.marginBottom }}>
          Modern typography combines centuries-old principles with cutting-edge technology, creating endless possibilities
          for visual communication in both print and digital media.
        </p>
      </div>
    </div>
  );
}
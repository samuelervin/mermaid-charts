import React from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  themeVariables: `{
    'primaryColor': '#03fc52',
    'primaryTextColor': '#ffffff',
    'primaryBorderColor': '#7C0000',
    'lineColor': '#F8B229',
    'secondaryColor': '#ffffff',
    'tertiaryColor': '#fff',
    'fontFamily': "Ariel",
    'background':"#03fc52"
  }`,
  securityLevel: "loose"
});

export default class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

export interface TypographySettings {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  textDecoration: string;
  fontStyle: string;
  textTransform: string;
  marginBottom: number;
  headings: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
    marginBottom: number;
  };
}
---
tag: CBKCRT0N6Y
kind: problem
type: answer
answer: \\frac{1}{2}\arccos(-\frac{1}{4})+\pin,\\frac{1}{2}\arccos(\frac{1}{3})+\pin,n\inZ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The equation is equivalent to

$$
\begin{gathered}
5(\operatorname{tg} x+\operatorname{ctg} 3 x)=\operatorname{tg} 2 x-\operatorname{tg} x \Leftrightarrow 5 \frac{\cos 2 x}{\cos x \sin 3 x}=\frac{\sin x}{\cos x \cos 2 x} \Leftrightarrow \\
\left\{\begin{array} { l }
{ 1 0 \operatorname { c o s } ^ { 2 } 2 x = \operatorname { c o s } 2 x - \operatorname { c o s } 4 x , } \\
{ \operatorname { c o s } x \neq 0 , \operatorname { c o s } 2 x \neq 0 , \operatorname { s i n } 3 x \neq 0 . }
\end{array} \Leftrightarrow \left[\begin{array}{l}
\cos 2 x=-\frac{1}{4} \\
\cos 2 x=\frac{1}{3}
\end{array}\right.\right.
\end{gathered}
$$

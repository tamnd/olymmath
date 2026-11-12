---
tag: 5N4JQDW4VQ
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\frac{1}{a}=\frac{a+b+c+d+m}{a}=1+\frac{b}{a}+\frac{c}{a}+\frac{d}{a}+\frac{m}{a}$

$$
\begin{aligned}
& \frac{1}{b}=\frac{a+b+c+d+m}{b}=\frac{a}{b}+1+\frac{c}{b}+\frac{d}{b}+\frac{m}{b} \\
& \frac{1}{c}=\frac{a+b+c+d+m}{c}=\frac{a}{c}+1+\frac{b}{c}+\frac{d}{c}+\frac{m}{c}
\end{aligned}
$$

$\frac{1}{d}=\frac{a+b+c+d+m}{d}=\frac{a}{d}+\frac{b}{d}+\frac{c}{d}+1+\frac{m}{d}$

$\frac{1}{m}=\frac{a+b+c+d+m}{m}=\frac{a}{m}+\frac{b}{m}+\frac{c}{m}+\frac{d}{m}+1$

$\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}+\frac{1}{m}=5+\left(\frac{b}{a}+\frac{a}{b}\right)+\left(\frac{c}{a}+\frac{a}{c}\right)+\cdots+\left(\frac{m}{d}+\frac{d}{m}\right) \geq 5+2 \cdot 10=25$.

$\left(10\right.$ brackets of the form $x+\frac{1}{x} \geq 2$ when $\left.x>0\right)$

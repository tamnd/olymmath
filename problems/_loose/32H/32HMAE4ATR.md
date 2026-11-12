---
tag: 32HMAE4ATR
kind: problem
type: answer
answer: \frac{\pi}{2}+2\pin,\frac{3\pi}{4}+2\pin,\pi+2\pin,n\inZ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$\frac{2 \operatorname{tg}^{4} 8 x+4 \sin 3 x \sin 5 x-\cos 6 x-\cos 10 x+2}{\sqrt{\sin x-\cos x}}=0$.

Given the condition $\sin x-\cos x>0$, we find the roots of the equation

$2 \operatorname{tg}^{4} 8 x+4 \sin 3 x \sin 5 x-\cos 6 x-\cos 10 x+2=0 \Leftrightarrow$

$2 \operatorname{tg}^{4} 8 x+4 \sin 3 x \sin 5 x-1+2 \sin ^{2} 3 x-1+2 \sin ^{2} 5 x+2=0 \Leftrightarrow 2 \operatorname{tg}^{4} 8 x+2(\sin 3 x+\sin 5 x)^{2}=0 \Leftrightarrow$

$\left\{\begin{array}{c}\operatorname{tg} 8 x=0, \\ \sin 3 x+\sin 5 x=0,\end{array} \Leftrightarrow\left\{\begin{array}{c}x=\frac{\pi n}{8}, \\ {\left[\begin{array}{c}\cos x=0, \\ \sin 4 x=0,\end{array}\right.}\end{array} \Leftrightarrow\left\{\begin{array}{c}x=\frac{\pi n}{8}, n \in Z, \\ {\left[\begin{array}{c}x=\frac{\pi}{2}+\pi k, k \in Z, \\ x=\frac{\pi l}{4}, l \in Z,\end{array} \Leftrightarrow x=\frac{\pi}{4}, l \in Z .\right.}\end{array}\right.\right.\right.$

Considering the condition $\sin x-\cos x>0$, we finally have $x=\frac{\pi}{2}+2 \pi n, x=\frac{3 \pi}{4}+2 \pi n$, $x=\pi+2 \pi n, n \in Z$.

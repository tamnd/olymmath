---
tag: VX30Y6E5CA
kind: problem
type: answer
answer: -4+9=5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The German mathematician Gottfried Wilhelm Leibniz once managed to show that 4 equals 5. Of course, there is a catch, as the proof is not entirely accurate.

Who can find the error?

$$
\begin{aligned}
& 16-36=25-45 \left\lvert\,+\frac{81}{4}\right. \\
& 16-36+\frac{81}{4}=25-45+\frac{81}{4}
\end{aligned}
$$

Both sides are transformed:

$$
\left(4-\frac{9}{2}\right)^{2}=\left(5-\frac{9}{2}\right)^{2}
$$

The square root is taken, and we get

$$
\begin{gathered}
\left.4-\frac{9}{2}=5-\frac{9}{2} \right\rvert\,+\frac{9}{2} \\
4=5
\end{gathered}
$$

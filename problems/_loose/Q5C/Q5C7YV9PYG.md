---
tag: Q5C7YV9PYG
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{n}$ be the area outside a regular $n$-gon of side length 1 but inside its circumscribed circle, let $B_{n}$ be the area inside the $n$-gon but outside its inscribed circle. Find the limit as $n$ tends to infinity of $\frac{A_{n}}{B_{n}}$.
Then $A_{n}=\pi\left(\frac{1}{2} \csc \frac{\pi}{n}\right)^{2}-\frac{n}{4} \cot \frac{\pi}{n}$, and $B_{n}=\frac{n}{4} \cot \frac{\pi}{n}-\pi\left(\frac{1}{2} \cot \frac{\pi}{n}\right)^{2}$, so $\frac{A_{n}}{B_{n}}=\frac{\pi\left(\csc \frac{\pi}{n}\right)^{2}-n \cot \frac{\pi}{n}}{n \cot \frac{\pi}{n}-\pi\left(\cot \frac{\pi}{n}\right)^{2}}$. Let $s$ denote $\sin \frac{\pi}{n}$ and $c$ denote $\cos \frac{\pi}{n}$. Multiply numerator and denominator by $s^{2}$ to get $\frac{A_{n}}{B_{n}}=\frac{\pi-n c s}{n c s-\pi c^{2}}$. Now use Taylor series to replace $s$ by $\frac{\pi}{n}-\frac{\left(\frac{\pi}{n}\right)^{3}}{6}+\ldots$ and $c$ by $1-\frac{\left(\frac{\pi}{n}\right)^{2}}{2}+\ldots$. By l'Hôpital's rule it will suffice to take just enough terms so that the highest power of $n$ in the numerator and denominator is determined, and that turns out to be $n^{-2}$ in each case. In particular, we get the limit $\frac{A_{n}}{B_{n}}=\frac{\pi-n \frac{\pi}{n}+n \frac{2}{3}\left(\frac{\pi}{n}\right)^{3}+\ldots}{n \frac{\pi}{n}-n \frac{2}{3}\left(\frac{\pi}{n}\right)^{3}-\pi+\pi\left(\frac{\pi}{n}\right)^{2}+\ldots}=\frac{\frac{2}{3} \frac{\pi^{3}}{n^{2}}+\ldots}{\frac{1}{3} \frac{\pi^{3}}{n^{2}}+\ldots} \rightarrow \mathbf{2}$

---
tag: SRC13GQRX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $\tan \alpha=\sqrt{2}-1$, the function $f(x)=x^{2} \tan 2 \alpha + x \sin \left(2 \alpha+\frac{\pi}{4}\right)$, where $\alpha \in\left(0, \frac{\pi}{2}\right)$.
(1) Find the analytical expression of $f(x)$;
(2) If the sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=\frac{1}{2}, a_{n+1}=f\left(a_{n}\right)\left(n \in \mathbf{N}^{*}\right)$.
Prove: (i) $a_{n+1}>a_{n}\left(n \in \mathbf{N}^{*}\right)$;
(ii) $1<\frac{1}{1+a_{1}}+\frac{1}{1+a_{2}}+\cdots+\frac{1}{1+a_{n}}<2\left(n \geqslant 2, n \in \mathbf{N}^{*}\right)$.

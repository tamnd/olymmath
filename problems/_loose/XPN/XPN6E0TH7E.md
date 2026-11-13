---
tag: XPN6E0TH7E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-mathnet
    label: Romania 2018 Romanian Mathematical Olympiad
---
Consider the set $M=\left\{\left.\left(\begin{array}{ll}a & b \\ c & d\end{array}\right) \in \mathcal{M}_{2}(\mathbb{C}) \right\rvert a b=c d\right\}$.

a) Give an example of a matrix $A \in M$ such that $A^{2017} \in M$ and $A^{2019} \in M$, but $A^{2018} \notin M$.

b) Show that if $A \in M$ and there exists an integer $k \geq 1$ such that $A^{k} \in M$, $A^{k+1} \in M$, and $A^{k+2} \in M$, then $A^{n} \in M$ for any integer $n \geq 1$.

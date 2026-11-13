---
tag: SB3WDAKW3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178711
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 65th Romanian Mathematical Olympiad
---
(a) Let $A$ be a matrix in $\mathcal{M}_{2}(\mathbb{C}), A \neq a I_{2}$, for any $a \in \mathbb{C}$. Show that a matrix $X$ in $\mathcal{M}_{2}(\mathbb{C})$ commutes with matrix $A$, i.e., $A X=X A$, if and only if there exist two complex numbers $\alpha$ and $\alpha^{\prime}$, such that $X=\alpha A+\alpha^{\prime} I_{2}$.

(b) Let $A, B$, and $C$ be three matrices in $\mathcal{M}_{2}(\mathbb{C})$, such that $A B \neq B A, A C=C A$ and $B C=C B$. Show that $C$ commutes with any matrix in $\mathcal{M}_{2}(\mathbb{C})$.

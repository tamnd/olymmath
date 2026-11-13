---
tag: FQ59W1KNF4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254336
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey 31st Turkish Mathematical Olympiad
---
Let $ABC$ be a triangle and $P$ be an interior point. Let $\omega_A$ be the circle that is tangent to the circumcircle of $BPC$ at $P$ internally and tangent to the circumcircle of $ABC$ at $A_1$ internally and let $\Gamma_A$ be the circle that is tangent to the circumcircle of $BPC$ at $P$ externally and tangent to the circumcircle of $ABC$ at $A_2$ internally. Define $B_1$, $B_2$, $C_1$, $C_2$ analogously. Let $O$ be the circumcentre of $ABC$. Prove that the lines $A_1A_2$, $B_1B_2$, $C_1C_2$ and $OP$ are concurrent.

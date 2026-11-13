---
tag: BM43FY59ZX
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250574
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Let $ABC$ be a right angled triangle with $\angle A = 90^o$and $BC = a$, $AC = b$, $AB = c$. Let $d$ be a line passing trough the incenter of triangle and intersecting the sides $AB$ and $AC$ in $P$ and $Q$, respectively.
(a) Prove that $$b \cdot \left( \frac{PB}{PA}\right)+ c \cdot \left( \frac{QC}{QA}\right) =a$$
(b) Find the minimum of $$\left( \frac{PB}{PA}\right)^ 2+\left( \frac{QC}{QA}\right)^ 2$$

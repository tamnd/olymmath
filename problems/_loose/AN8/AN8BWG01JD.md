---
tag: AN8BWG01JD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10929
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$\mathrm{ABC}$ is a triangle. $\mathrm{BD}$ is the an angle bisector. $\mathrm{E}, \mathrm{F}$ are the feet of the perpendiculars from $\mathrm{A}$, $C$ respectively to the line $B D . M$ is the foot of the perpendicular from $D$ to the line $B C$. Show that $\angle \mathrm{DME}=\angle \mathrm{DMF}$.

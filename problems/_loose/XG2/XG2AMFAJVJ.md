---
tag: XG2AMFAJVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$^{+}$ Use induction on $|G|$. Delete a vertex $v$ of odd degree, and then apply the induction hypothesis to a suitably modified $G-v$ (so as to reflect the role of $v$ in $G$). If $G$ is viewed as a vertex bipartition defined by a cut $D$ (unless $D=\emptyset$, which is allowed), this may be helpful for the proof.

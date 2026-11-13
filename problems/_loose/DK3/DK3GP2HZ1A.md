---
tag: DK3GP2HZ1A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14183
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
Given triangle $\triangle ABC$ and let $D,E,F$ be the foot of angle bisectors of $A,B,C$ ,respectively. $M,N$ lie on $EF$ such that $AM=AN$ . Let $H$ be the foot of $A$ -altitude on $BC$ .
Points $K,L$ lie on $EF$ such that triangles $\triangle AKL, \triangle HMN$ are correspondingly similiar (with the given order of vertices) such that $AK \not\parallel HM$ and $AK \not\parallel HN$ .

Show that: $DK=DL$

---
tag: PRXVWN1WA5
kind: problem
type: answer
answer: \tan \theta = \frac{2 \sin \alpha \sin \beta}{\sin(\alpha - \beta)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two train lines intersect each other at a junction at an acute angle $\theta$. A train is passing along one of the two lines. When the front of the train is at the junction, the train subtends an angle $\alpha$ at a station on the other line. It subtends an angle $\beta (<\alpha)$ at the same station, when its rear is at the junction. Show that
$$\tan\theta=\frac{2\sin\alpha\sin\beta}{\sin(\alpha-\beta)}$$

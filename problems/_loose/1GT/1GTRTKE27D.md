---
tag: 1GTRTKE27D
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 1000 doors $D_1, D_2, . . . , D_{1000}$ and 1000 persons $P_1, P_2, . . . , P_{1000}$.
Initially all the doors were closed. Person $P_1$ goes and opens all the doors.
Then person $P_2$ closes door $D_2, D_4, . . . , D_{1000}$ and leaves the odd numbered doors open. Next $P_3$ changes the state of every third door, that
is, $D_3, D_6, . . . , D_{999}$ . (For instance, $P_3$ closes the open door $D_3$ and opens
the closed door D6, and so on). Similarly, $P_m$ changes the state of the
the doors $D_m, D_{2m}, D_{3m}, . . . , D_{nm}, . . .$ while leaving the other doors untouched. Finally, $P_{1000}$ opens $D_{1000}$ if it was closed or closes it if it were
open. At the end, how many doors will remain open?

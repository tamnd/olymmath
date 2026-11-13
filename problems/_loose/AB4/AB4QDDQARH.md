---
tag: AB4QDDQARH
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each field of an $n \times n$ board, a dragon is sleeping. Dragons are neighbors if they are on fields that share a side. Every hour, Mini wakes up one dragon that has at least one living neighbor, and Maks directs that dragon towards one of its living neighbors. The awakened dragon breathes fire and destroys the chosen neighbor, then goes back to sleep.

Mini wants to reduce the number of dragons, while Maks wants as many dragons to remain as possible. If both choose the best they can, how many dragons will remain on the board for

(a) $n=4$ ?

(b) $n=5$ ?

---
tag: 2VM8TRP3KC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164965
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite, white, square-grid paper, a finite number of squares are painted black. At time moments $t=1,2, \ldots$, all squares on the paper simultaneously change color according to the following rules. Each " $N$ " square will turn to the color that was the majority color in the previous moment among the following 3 squares: the $N$ square itself, its right neighbor, and its upper neighbor (that is, if 2 or 3 of these were white, then $N$ will turn white, and if 2 or 3 were black, then $N$ will turn black).

Prove that after a finite time, there will be no black squares on the paper.

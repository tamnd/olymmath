---
tag: JDM6YTN7S3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $n \ge 3$ be a positive integer. Suppose we have a circle with $n$ positions labeled $1, 2, \dots, n$ in clockwise order. $n$ counters, each with one side white and the other side black, are placed on the circle with one counter in each of the numbered positions. Initially all counters have the white side facing up, except the counter at position $1$ which shows black. We are allowed to perform the following operation:
(i) Choose a counter $X$ whose black side is facing up, and let $Y, Z$ be the next two counters in clockwise order.
(ii) Flip counter $Y$ so that it is showing the other color.
(iii) Move $X$ two spaces clockwise, and move $Y, Z$ one space counterclockwise. (So after the operation we still have one counter in each position.)
Let $S$ be any nonempty subset of $\{1, 2, \dots, n\}$. Show that we can perform a finite sequence of moves after which the numbers in $S$ correspond exactly to the positions of the black counters.

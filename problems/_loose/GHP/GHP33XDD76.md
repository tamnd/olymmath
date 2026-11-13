---
tag: GHP33XDD76
kind: problem
type: answer
answer: 2^{2007}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let's look at a table of 3 rows and 2008 columns. In the first row, a random integer is written in each cell of the table, in a non-decreasing order. The numbers of the second row are obtained in the following way: under every number $A$ from the first row is written a number $B$, which equals the number of numbers in the first row that are less than $A$ and located to the left of $A$. Similarly, the numbers of the third row are obtained with respect to the second row: under every number $C$ of the second row is written a number $D$, which equals the number of numbers in the second row that are less than $C$ and located to the left of $C$. Prove that the second and third row of this table are filled equally.

b) We have tables that consist of 2 rows and 2008 columns and are built in such a way that in every table, in the first row, random integers are written (in every cell we have exactly one number) in a non-decreasing order. The numbers of the other row are obtained in the way that under every number $A$ in the first row is written a number $B$, which equals the number of integers in the first row that are less than $A$ and located to the left of $A$. We know that every table has pairwise different second rows. Find the maximum possible number of tables.

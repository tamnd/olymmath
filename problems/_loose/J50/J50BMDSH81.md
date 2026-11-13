---
tag: J50BMDSH81
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $k \ge 2$. Two players, Ana and Banana, play the following game of numbers: Initially, some integer $n \ge k$ gets written on the blackboard. Then they take moves in turn, with Ana beginning. A player making a move erases the number $m$ just written on the blackboard and replaces it by some number $m'$ with $k \le m' < m$ that is coprime to $m$. The first player who cannot move anymore loses.
An integer $n \ge k$ is called good if Banana has a winning strategy when the initial number is $n$, and bad otherwise.
Consider two integers $n, n' \ge k$ with the property that each prime number $p \le k$ divides $n$ if and only if it divides $n'$. Prove that either both $n$ and $n'$ are good or both are bad.

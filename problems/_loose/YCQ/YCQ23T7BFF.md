---
tag: YCQ23T7BFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2760384
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2017
    source: hf-ai-mo-aops
    label: 2017 BMT Spring
---
You and your friend play a game on a $ 7 \times 7$ grid of buckets. Your friend chooses $5$ "lucky" buckets by marking an " $X$ " on the bottom that you cannot see. However, he tells you that they either form a vertical, or horizontal line of length $5$ . To clarify, he will select either of the following sets of buckets:
either $\{(a, b),(a, b + 1),(a, b + 2),(a, b + 3),(a, b + 4)\}$ ,
or $\{(b, a),(b + 1, a),(b + 2, a),(b + 3, a),(b + 4, a)\}$ ,
with $1\le a \le 7$ , and $1 \le b \le 3$ . Your friend lets you pick up at most $n$ buckets, and you win if one of the buckets you picked was a "lucky" bucket. What is the minimum possible value of $n$ such that, if you pick your buckets optimally, you can guarantee that at least one is "lucky"?

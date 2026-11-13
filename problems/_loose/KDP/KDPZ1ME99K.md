---
tag: KDPZ1ME99K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101819
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
5 Professor Moriarty has designed a "prime-testing trail." The trail has 2002 stations, labeled 1, . ., 2002. Each station is colored either red or green, and contains a table which indicates, for each of the digits $0, \ldots, 9$, another station number. A student is given a positive integer $n$, and then walks along the trail, starting at station 1. The student reads the first (leftmost) digit of $n$, and looks this digit up in station 1 's table to get a new station location. The student then walks to this new station, reads the second digit of $n$ and looks it up in this station's table to get yet another station location, and so on, until the last (rightmost) digit of $n$ has been read and looked up, sending the student to his or her final station. Here is an example that shows possible values for some of the tables. Suppose that $n=19$ :
\begin{tabular}{c|cccccccccc}
Station & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\
\hline 1 (red) & 15 & 29 & 314 & 16 & 2002 & 97 & 428 & 1613 & 91 & 24 \\
$\vdots$ & & & & & & & & & & \\
29 (red) & 98 & 331 & 1918 & 173 & 15 & 41 & 17 & 631 & 1211 & 1429 \\
$\vdots$ & & & & & & & & & & \\
1429 (green) & 7 & 18 & 31 & 43 & 216 & 1709 & 421 & 53 & 224 & 1100
\end{tabular}

Using these tables, station 1, digit 1 leads to station 29; station 29, digit 9 leads to station 1429; and station 1429 is green.

Professor Moriarty claims that for any positive integer $n$, the final station (in the example, 1429) will be green if and only if $n$ is prime. Is this possible?

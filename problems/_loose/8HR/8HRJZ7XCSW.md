---
tag: 8HRJZ7XCSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $2004\times 2004$ chessboard we place $2004$ white knights$^1$ in the upper row, and $2004$ black ones in the lowest row. After a finite number of regular chess moves$^2$ , we get the opposite situation where the black ones are on the top and the white ones on the bottom lines.
In a *turn * we make a move with each of the pieces of a color. If you know that each square except those on which the knights originally lie, must not be used more than once in this process, and that after each turn no $2$ knights of the same color can be attacking each other$^3$ , determine the number of ways in which this can be accomplished.

$^1$ also known as horses
$^2$ the knight can be moved either one square horizontally and two vertically or two squares horizontally and one vertically, in any direction on both horizontal and vertical lines
$^3$ a knight is attacking another knight, if in one chess move, the first one can be placed on the second one's place

# Match rate

This report is made by `om matchrate` (spec 05.4). A seed row is matched by key (K) when its competition, year and position give an appearance that has a record. It is matched by link when its capture (the file and the row of the dataset) is a statement of a record: an import took the row into that record. Else it is compared by E, the cosine of the TF-IDF weights of the words and TeX, with the canonical statements of the records. A row whose nearest record has E of at least 0.7 is matched, unless the row and the record both have an answer and the answers differ after a light normalization (signal A). Such a row is a variant: it can be another problem, or the same answer in another form, so a person must look at it. A row with E from 0.5 to 0.7 is near, and a person must look at it too. The other rows are new. New rows of one dataset that have E of at least 0.7 with each other are one new problem, so a problem that the dataset has in several rows counts once. The new texts count each text of the new rows once.

Each row is matched twice: against the 41678 placed records (with an appearance in a competition), and against all 181688 records with a statement, the loose records under problems/_loose included. The weights of the words come from all the records in both cases. The report of the derived datasets alone is `derived.md`.

## New problems for each 10,000 rows

| Dataset | Rows | Against the placed records | Against all the records |
|---|---:|---:|---:|
| hf-mathnet | 55634 | 2847 | 678 |
| hf-numina-olympiads | 13087 | 1191 | 325 |
| hf-numina-olympiads-ref | 13087 | 1098 | 346 |
| hf-ai-mo-aops | 80661 | 5335 | 1533 |
| hf-aops-wiki | 43005 | 2712 | 416 |
| hf-aime-1983-2026 | 1065 | 28 | 19 |
| hf-amc12-full | 1199 | 58 | 50 |
| hf-putnam-1995-2025 | 372 | 0 | 0 |
| hf-putnam-axiom | 100 | 700 | 500 |
| hf-putnamgap | 1051 | 124 | 124 |
| hf-olymmath-ruc | 400 | 4950 | 2450 |
| hf-amo-bench | 50 | 200 | 200 |
| hf-nemotron-imo-bench | 200 | 100 | 50 |
| hf-mathodyssey | 148 | 0 | 0 |
| hf-tubitak | 0 | 0 | 0 |
| hf-indonesian-olympiad | 2204 | 9229 | 8689 |
| hf-hrm8k | 8011 | 7406 | 6360 |
| All | 220274 | 3710 | 1177 |

## Against the placed records

| Dataset | Rows | Matched | By key | By link | Variants | Near | New rows | New rate | New texts | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-mathnet | 55634 | 13495 | 0 | 5802 | 2859 | 7008 | 32272 | 58.01% | 16162 | 15839 | 2847 | 21484 |
| hf-numina-olympiads | 13087 | 10747 | 10380 | 65 | 0 | 456 | 1884 | 14.40% | 1601 | 1559 | 1191 | 439 |
| hf-numina-olympiads-ref | 13087 | 10724 | 10379 | 0 | 22 | 612 | 1729 | 13.21% | 1475 | 1437 | 1098 | 446 |
| hf-ai-mo-aops | 80661 | 27151 | 0 | 8833 | 0 | 8996 | 44514 | 55.19% | 44513 | 43032 | 5335 | 18951 |
| hf-aops-wiki | 43005 | 25510 | 18446 | 0 | 0 | 3480 | 14015 | 32.59% | 11974 | 11663 | 2712 | 6946 |
| hf-aime-1983-2026 | 1065 | 1060 | 1060 | 0 | 0 | 2 | 3 | 0.28% | 3 | 3 | 28 | 3 |
| hf-amc12-full | 1199 | 1189 | 1189 | 0 | 0 | 0 | 10 | 0.83% | 10 | 7 | 58 | 10 |
| hf-putnam-1995-2025 | 372 | 372 | 372 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-putnam-axiom | 100 | 86 | 76 | 0 | 0 | 5 | 9 | 9.00% | 9 | 7 | 700 | 9 |
| hf-putnamgap | 1051 | 1036 | 1036 | 0 | 0 | 1 | 14 | 1.33% | 14 | 13 | 124 | 14 |
| hf-olymmath-ruc | 400 | 12 | 0 | 0 | 8 | 55 | 325 | 81.25% | 325 | 198 | 4950 | 0 |
| hf-amo-bench | 50 | 49 | 49 | 0 | 0 | 0 | 1 | 2.00% | 1 | 1 | 200 | 1 |
| hf-nemotron-imo-bench | 200 | 198 | 194 | 0 | 0 | 0 | 2 | 1.00% | 2 | 2 | 100 | 2 |
| hf-mathodyssey | 148 | 148 | 148 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-tubitak | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-indonesian-olympiad | 2204 | 13 | 0 | 0 | 2 | 98 | 2091 | 94.87% | 2091 | 2034 | 9229 | 25 |
| hf-hrm8k | 8011 | 808 | 0 | 0 | 97 | 909 | 6197 | 77.36% | 6194 | 5933 | 7406 | 650 |
| All | 220274 | 92598 | 43329 | 14700 | 2988 | 21622 | 103066 | 46.79% | 84374 | 81728 | 3710 | 48980 |

## Against all the records

| Dataset | Rows | Matched | By key | By link | Variants | Near | New rows | New rate | New texts | New problems | New per 10,000 rows | New with a competition |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| hf-mathnet | 55634 | 34973 | 0 | 15228 | 5025 | 8413 | 7223 | 12.98% | 3828 | 3771 | 678 | 5081 |
| hf-numina-olympiads | 13087 | 11939 | 10380 | 566 | 0 | 655 | 493 | 3.77% | 434 | 425 | 325 | 78 |
| hf-numina-olympiads-ref | 13087 | 11677 | 10379 | 0 | 91 | 790 | 529 | 4.04% | 461 | 453 | 346 | 76 |
| hf-ai-mo-aops | 80661 | 59461 | 0 | 24681 | 0 | 8419 | 12781 | 15.85% | 12781 | 12363 | 1533 | 3513 |
| hf-aops-wiki | 43005 | 37717 | 18446 | 0 | 0 | 2919 | 2369 | 5.51% | 1931 | 1787 | 416 | 1193 |
| hf-aime-1983-2026 | 1065 | 1060 | 1060 | 0 | 0 | 3 | 2 | 0.19% | 2 | 2 | 19 | 2 |
| hf-amc12-full | 1199 | 1189 | 1189 | 0 | 0 | 1 | 9 | 0.75% | 9 | 6 | 50 | 9 |
| hf-putnam-1995-2025 | 372 | 372 | 372 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-putnam-axiom | 100 | 87 | 76 | 0 | 0 | 6 | 7 | 7.00% | 7 | 5 | 500 | 7 |
| hf-putnamgap | 1051 | 1036 | 1036 | 0 | 0 | 1 | 14 | 1.33% | 14 | 13 | 124 | 14 |
| hf-olymmath-ruc | 400 | 86 | 0 | 0 | 31 | 119 | 164 | 41.00% | 164 | 98 | 2450 | 0 |
| hf-amo-bench | 50 | 49 | 49 | 0 | 0 | 0 | 1 | 2.00% | 1 | 1 | 200 | 1 |
| hf-nemotron-imo-bench | 200 | 198 | 194 | 0 | 0 | 1 | 1 | 0.50% | 1 | 1 | 50 | 1 |
| hf-mathodyssey | 148 | 148 | 148 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-tubitak | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0.00% | 0 | 0 | 0 | 0 |
| hf-indonesian-olympiad | 2204 | 25 | 0 | 0 | 16 | 195 | 1968 | 89.29% | 1968 | 1915 | 8689 | 25 |
| hf-hrm8k | 8011 | 1006 | 0 | 0 | 223 | 1473 | 5309 | 66.27% | 5306 | 5095 | 6360 | 586 |
| All | 220274 | 161023 | 43329 | 40475 | 5386 | 22995 | 30870 | 14.01% | 26907 | 25935 | 1177 | 10586 |

## Why the new rows have no record

For each row that is new against all the records, the reason that the loose import (`om import -loose`) made no record of it: the check that dropped the row, "held for a review" for a row that the import left for a review (reports/review/loose-held.tsv), "dataset not read by the loose import" for a dataset that the loose import does not read, and "passed the checks" for a row that passed the checks. Such a row can be one that the import linked or joined by its other signals, or a new problem. The removed rows are in registers/loose-removed.tsv.

| Reason | hf-mathnet | hf-numina-olympiads | hf-numina-olympiads-ref | hf-ai-mo-aops | hf-aops-wiki | hf-aime-1983-2026 | hf-amc12-full | hf-putnam-1995-2025 | hf-putnam-axiom | hf-putnamgap | hf-olymmath-ruc | hf-amo-bench | hf-nemotron-imo-bench | hf-mathodyssey | hf-tubitak | hf-indonesian-olympiad | hf-hrm8k | All |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| dataset not read by the loose import | 0 | 0 | 529 | 0 | 2369 | 2 | 9 | 0 | 7 | 14 | 164 | 1 | 1 | 0 | 0 | 1968 | 5309 | 10373 |
| passed the checks | 573 | 5 | 0 | 8582 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 9160 |
| needs a figure | 1418 | 84 | 0 | 1923 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 3425 |
| unknown language | 2476 | 93 | 0 | 16 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2585 |
| held for a review | 1958 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1966 |
| several problems | 6 | 2 | 0 | 960 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 968 |
| link-only competition | 236 | 0 | 0 | 410 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 646 |
| broken TeX | 94 | 0 | 0 | 317 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 411 |
| removed by a review | 344 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 344 |
| a shortlist or longlist row | 0 | 232 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 232 |
| links to a page | 0 | 0 | 0 | 108 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 108 |
| refers to another problem | 4 | 0 | 0 | 100 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 104 |
| physics or chemistry | 2 | 0 | 0 | 101 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 103 |
| not a statement | 74 | 0 | 0 | 26 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 100 |
| has a position | 0 | 68 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 68 |
| formulas lost | 18 | 0 | 0 | 49 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 67 |
| request | 4 | 0 | 0 | 47 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 51 |
| too long | 0 | 0 | 0 | 51 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 51 |
| too short | 10 | 1 | 0 | 24 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 35 |
| solution only | 2 | 0 | 0 | 31 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 |
| table of contents | 2 | 0 | 0 | 24 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 26 |
| economics or finance | 2 | 0 | 0 | 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 |
| names a link-only competition | 0 | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 2 |
| a grading scheme or a note | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| a task of informatics | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |

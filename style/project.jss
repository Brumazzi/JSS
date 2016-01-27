;vars
@line_center = 60%
@border = solid 1px rgba(0,0,0,0.8)

;reset style
*:
	margin = 0px
	padding = 0px
end

.list:
	margin = auto
	display = table
	width = 90%
	line-height = @line_center
	list-style = none
	margin-top = 2rem
	margin-bottom = 2rem
	border = @border
	border-radius = 1rem
	overflow = hidden
	li:
		border-bottom = @border
		border-top = @border
		padding = 1rem
		background = rgba(0,0,0,0.3)
		cursor = pointer
		text-align = center
		font-weight = bold
		!hover:
			background = rgba(0,0,0,.6) | rgba(0,0,0,0.3)
		end
	end
end

header:
	background = rgba(0,0,0,0.6)
	h1:
		padding-top = 0.5rem
		padding-bottom = 0.5rem
		text-align = center
		font-size = 3rem
	end
end

footer:
	height = 4rem
	line-height = 4rem
	background = rgba(0,0,0,0.6)
	display = table
	width = 100%
	h2:
		position = relative
		right = 5%
		float = right
	end
end

html:
	background = #62af80
end

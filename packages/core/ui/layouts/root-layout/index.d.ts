import { GridLayout } from '../grid-layout';
import { View } from 'ui/core/view';

export class RootLayout extends GridLayout {
	open(view: View, options?: RootLayoutOptions): Promise<void>;
	close(view: View, exitAnimation?: AnimationDefinition): Promise<void>;
	bringToFront(view: View, animated?: boolean): Promise<void>;
	closeAll(): Promise<void>;
	getShadeCover(): View;
}

export function getRootLayout(): RootLayout;

export interface RootLayoutOptions {
	shadeCover?: ShadeCoverOptions;
	enterAnimation?: AnimationDefinition;
	exitAnimation?: AnimationDefinition;
}

export interface ShadeCoverOptions {
	opacity?: number;
	color?: string;
	tapToClose?: boolean;
	height?: number; // shade will be vertically aligned at bottom with the height specified
	animation?: {
		enterFrom?: ShadeCoverAnimation; // these will only be applied if its the first one to be opened
		exitTo?: ShadeCoverAnimation; // these will only be applied if its the last one to be closed
	};
	ignoreShadeRestore?: boolean;
}

export interface ShadeCoverAnimation {
	translateX?: number;
	translateY?: number;
	scaleX?: number;
	scaleY?: number;
	rotate?: number; // in degrees
	opacity?: number;
	duration?: number; // in seconds
}

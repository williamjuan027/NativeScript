import { GridLayout } from '../../grid-layout';

export class RootLayoutBaseview extends GridLayout {
	createNativeView() {
		return new RootLayoutBaseviewImpl(this._context);
	}
}

@NativeClass()
// TODO: ask Osei do we need JavaProxy? because it breaks it
// @JavaProxy('com.tns.RootLayoutBaseview')
class RootLayoutBaseviewImpl extends org.nativescript.widgets.GridLayout {
	owner: WeakRef<RootLayoutBaseview>;
	constructor(context: any) {
		super(context);
		return global.__native(this);
	}
	onInterceptTouchEvent(event: android.view.MotionEvent): boolean {
		// TODO:
		// need to block touch events between the different layers
		// topmost view, should block all touch events that could
		// possible go through the layer underneath it
		console.log('touch intercepted', event);
		// return true will block all touch events
		return false;
	}
}

import { AddChildFromBuilder, View } from '../../../core/view';

export class RootLayoutBaseview extends View implements AddChildFromBuilder {
	_nativeView: RootLayoutBaseviewImpl;

	createNativeView() {
		this._nativeView = new RootLayoutBaseviewImpl(this._context);
		this._nativeView.owner = new WeakRef(this);
		return this._nativeView;
	}

	_addChildFromBuilder(name: string, value: View): void {
		if (value.parent === this || (value.nativeView && value.nativeView.getParent() === this._nativeView)) {
			return;
		}
		if (!value.nativeView) {
			this._addView(value);
		}
		value.nativeView.this._nativeView.addView(value.nativeView);
	}

	getChildCount() {
		return this._nativeView.getChildCount();
	}

	// add missing methods here
	// reference the gridlayout view

	// TODO: need to implement all the methods that are erroring in the RootLayout
	// getChildAtIndex
	// removeChild
	// insertChild
	// getChildrenCount -> does this need
}

@NativeClass()
@JavaProxy('com.tns.RootLayoutBaseview')
class RootLayoutBaseviewImpl extends android.widget.LinearLayout {
	owner: WeakRef<RootLayoutBaseview>;

	constructor(context: any) {
		super(context);
		return global.__native(this);
	}

	// TODO: ask Osei
	// is this supposed to be applied to only the child and
	// not the rootlayout itself since the child is the one that
	// is the one letting the tap event go through to the
	// elements behind it
	onInterceptTouchEvent(event): boolean {
		return false;
	}

	// this.owner.get()
}

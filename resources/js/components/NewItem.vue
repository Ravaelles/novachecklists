<template>
    <div>
        <div class="flex checklist-item-new">
            <textarea
                :id="item.id"
                :class="textareaClasses"
                :rows="numOfRows()"
                name="new-item"
                :placeholder="placholderText"
                v-model="item.body"
                v-on:keydown.enter.exact.prevent="addItem"
            ></textarea>
            <button class="ml-3 " v-show="item.body.length > 0" :disabled="item.body.length == 0" @click.prevent="addItem" type="button" name="new-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="sidebar-icon"><path fill="var(--sidebar-icon)" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"></path></svg>
            </button>
        </div>
    </div>
</template>
<script>
  export default {
    props: ['field'],
    data() {
      return {
        item: this.freshItem()
      };
    },
    computed: {
      placholderText() {
        return (this.field.placeholder || 'Add item ') + (this.field.placeholder_count ? (this.$parent.items.length + 1) : '');
      },
      textareaClasses() {
        let classes = this.errorClasses || [];
        classes.push('w-full');
        classes.push('form-control');
        classes.push('form-input');
        classes.push('form-input-bordered');
        return classes;
      }
    },
    methods: {
      freshItem() {
        return {
          id: this.uuidv4(),
          body: '',
          created_at: null,
          created_by: null,
          completed_at: null,
          completed_by: null,
        };
      },
      addItem() {
        if (this.item.body.length > 0) {
          if (this.field.user) {
            this.item.created_by = this.field.user;
          }
          this.item.created_at = Date.now();
          this.$emit('created', this.item);
          this.item = this.freshItem();
        }
      },
      numOfRows() {
        let text = this.item.body;
        let numberOfLineBreaks = (text.match(/\n/g) || []).length;
        return numberOfLineBreaks + 1;
      },
      uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    }
  }
</script>

<style scoped>
.checklist-item-new textarea {
  min-height: 1.5rem;
  height: auto;
  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-word;
}
</style>
